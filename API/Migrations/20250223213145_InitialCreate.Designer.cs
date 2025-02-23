﻿// <auto-generated />
using System;
using API.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(ToDoContext))]
    [Migration("20250223213145_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.14");

            modelBuilder.Entity("API.Models.Tasks", b =>
                {
                    b.Property<int>("taskId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("endDate")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("startDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("title")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("userId")
                        .HasColumnType("INTEGER");

                    b.HasKey("taskId");

                    b.ToTable("ToDos");

                    b.HasData(
                        new
                        {
                            taskId = 1,
                            title = "test1"
                        },
                        new
                        {
                            taskId = 2,
                            title = "test2"
                        },
                        new
                        {
                            taskId = 3,
                            title = "test3"
                        },
                        new
                        {
                            taskId = 4,
                            title = "test4"
                        },
                        new
                        {
                            taskId = 5,
                            title = "test5"
                        });
                });

            modelBuilder.Entity("API.Models.User", b =>
                {
                    b.Property<int>("userId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("userId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            userId = 1,
                            name = "admin"
                        },
                        new
                        {
                            userId = 2,
                            name = "user"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
