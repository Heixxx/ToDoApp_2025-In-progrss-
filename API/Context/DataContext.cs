using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Data;


public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
}