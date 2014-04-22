#pragma strict

var projectile : GameObject;
var duration : int;
var speed : int;

function Start () 
{
	projectile = Resources.Load("explosion1", GameObject);
	speed = 30;
	duration = 5;
}

function Update () 
{
	if (Input.GetButtonDown("Fire1"))
	{
		var clone : GameObject;
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.rigidbody.velocity = transform.TransformDirection(Vector3.forward * speed);
		Destroy(clone, duration);
	}
}