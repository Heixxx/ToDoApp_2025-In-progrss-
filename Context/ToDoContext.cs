namespace API.Context;

using API.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

public class ToDoContext:DbContext{
    public ToDoContext(DbContextOptions<ToDoContext> options): base(options){ }
    public DbSet<Tasks> ToDos {get;set;} = null!;
    // public DbSet<Users> Users {get;set;} = null!;

    // seed data
    protected override void OnModelCreating(ModelBuilder modelBuilder){
        modelBuilder.Entity<Tasks>().HasData(
            new Tasks{task_Id = 1, user_Id=null, title = "test1"},
            new Tasks{task_Id = 2, user_Id=null, title = "test2"},
            new Tasks{task_Id = 3, user_Id=null, title = "test3"},
            new Tasks{task_Id = 4, user_Id=null, title = "test4"}
        );
    }
}