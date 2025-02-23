namespace API.Models;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations; 


public class Tasks{
    [Key]
    public int taskId {get;set;}
    public int? userId {get;set;}
    [Required(ErrorMessage = "Enter title")]
    public string title {get;set;}
    // [Required(ErrorMessage = "Enter date")]
    public DateTime? startDate {get;set;}
    public DateTime? endDate {get;set;}
}