# Generated by Django 4.2.13 on 2024-07-04 02:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("goTogether", "0009_car_brand_car_color_car_model_car_passengers_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="car",
            name="brand",
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="car",
            name="color",
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name="car",
            name="model",
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="car",
            name="plate",
            field=models.CharField(max_length=20),
        ),
    ]