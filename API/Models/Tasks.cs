namespace API.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations; 


public class Tasks{
    [Key]
    public int task_Id {get;set;}
    public int? user_Id {get;set;}
    [Required(ErrorMessage = "Enter title")]
    public string title {get;set;}
    public string start_Date {get;set;}
    public string end_Date {get;set;}
    public string start_Time {get;set;}
    public string end_Time {get;set;}
}