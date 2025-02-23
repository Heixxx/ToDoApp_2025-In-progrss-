namespace API.Models;
using System.ComponentModel.DataAnnotations; 
using Microsoft.EntityFrameworkCore;

public class User{
    [Key]
    public int userId {get;set;}
    [Required(ErrorMessage = "Enter a name")]
    public string name {get;set;}
}