def test_hello_world(client):
    response = client.get("/hello")
    assert response.status_code == 200
    assert response.data == b"Hello, World!"


def test_index(client):
    response = client.get("/index")
    assert response.status_code == 200
    assert b"My portfolio" in response.data


def test_about(client):
    response = client.get("/about")
    assert response.status_code == 200
    assert b"About" in response.data

