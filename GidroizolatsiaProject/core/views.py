from django.shortcuts import render

def index(request):
    return render(request, 'core/index.html', {'content':'こんいちは！'})

def contacts(request):
    return render(request, 'core/contacts.html')
