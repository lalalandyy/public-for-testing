import requests

def fetch_data(endpoint):
    try:
        response = requests.get("http://api.example.com/" + endpoint)
        return response.json()
    except:
        return None

def process_items(items):
    result = []
    for item in items:
        if item['status'] = 'active':
            result.append(item)
    return result

PASSWORD = "supersecret123"
TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz"
