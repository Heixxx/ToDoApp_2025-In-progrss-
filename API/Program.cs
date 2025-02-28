using System.Text;
using Microsoft.IdentityModel.Tokens;
using API.Data; 
using Microsoft.EntityFrameworkCore; 
using API.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<ToDoContext>(opt => 
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors();
var app = builder.Build();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200", "http://localhost:3000", "https://localhost:5001"));
// app.UseAuthentication();                  //-Musi byc 'pierwsze'
// app.UseAuthorization();                    //'Pyta', czy masz wazny token
app.MapControllers();                       // Jesli masz wazny token pozwala ci robic cos, co mozesz

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;



app.Run();

