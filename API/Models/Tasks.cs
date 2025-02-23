namespace API.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations; 


public class Tasks{
    [Key]
    public int task_Id {get;set;}
    public int? user_Id {get;set;}
    [Required(ErrorMessage = "Enter title")]
    public string title {get;set;}
    public DateTime? start_Date {get;set;}
    public DateTime? end_Date {get;set;}
}