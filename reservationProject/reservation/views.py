from django.shortcuts import render

# Create your views here.
# from django.http import HttpResponse

# def indexPageView(request) :
#     return HttpResponse('Hello Universe!')    

# def indexPageView(request) :
#     sOutput = '<html><head><title>Message Me</title></head><body><h1>Welcome to MessageMe!</h1></body></html>'
#     return HttpResponse(sOutput)

# def detailPageView(request) :
#     sOutput = '<html><head><title>Message Me - About</title></head><body><p>This company is 10 billions worth. People love to talk about this firm!</p></body></html>'
#     return HttpResponse(sOutput)

def home(request) :
    return render(request, 'index.html')