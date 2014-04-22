#pragma strict

var health : int;

function Start () 
{
	health = 10;
}

function Update () 
{
	if(health < 1)
	{
		Destroy(gameObject);
	}
}

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.tag == "aiProjectile")
		health -= 2;
}