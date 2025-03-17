using API.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers(); 

builder.Services.AddDbContext<ToDoContext>(opt => {
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors(opt =>{
    opt.AddPolicy("ReactClients", policy =>{
        policy.WithOrigins(
            "http://localhost:4200",
            "http://localhost:3000",
            "https://localhost:5001")
            .AllowAnyHeader().AllowAnyMethod();
    });
});

builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenAnyIP(5000); // HTTP
    serverOptions.ListenAnyIP(5001, listenOptions => 
    {
        listenOptions.UseHttps(); // Użyj domyślnego certyfikatu developerskiego
    }); // HTTPS
});

var app = builder.Build();

app.UseRouting();
app.UseCors("ReactClients");

if (app.Environment.IsDevelopment()){
    // SWAGGER
}

app.MapControllers();

using (var scope = app.Services.CreateScope()){
    var context = scope.ServiceProvider.GetRequiredService<ToDoContext>();
    context.Database.EnsureCreated();
}

app.MapGet("/", () => "Hello World!");

app.Run();
