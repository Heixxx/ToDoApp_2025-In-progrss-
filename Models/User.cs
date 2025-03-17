
namespace API.Models;
using System.ComponentModel.DataAnnotations; 
using Microsoft.EntityFrameworkCore;

public class User{
    [Key]
    public int user_Id {get;set;}
    [Required(ErrorMessage = "Enter a name")]
    public required string name {get;set;}
}