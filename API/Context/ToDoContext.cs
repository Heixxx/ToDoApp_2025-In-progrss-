namespace API.Context;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations; 
using API.Models;

public class ToDoContext:DbContext{
    public ToDoContext(DbContextOptions<ToDoContext> options): base(options){  }
    public DbSet<Tasks> ToDos {get;set;} = null!;
    public DbSet<User> Users {get;set;} = null!;

    //seed data
    protected override void OnModelCreating(ModelBuilder modelBuilder){
        modelBuilder.Entity<Tasks>().HasData(
            new Tasks {taskId = 1, userId=null, title = "test1"},
            new Tasks {taskId = 2, userId=null, title = "test2"},
            new Tasks {taskId = 3, userId=null, title = "test3"},
            new Tasks {taskId = 4, userId=null, title = "test4"},
            new Tasks {taskId = 5, userId=null, title = "test5"}
        );
        modelBuilder.Entity<User>().HasData(
            new User {userId = 1, name = "admin"},
            new User {userId = 2, name = "user"}
        );
    }
}