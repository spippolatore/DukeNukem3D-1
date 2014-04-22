#pragma strict

var player : Transform;

function Start () 
{

}

function Update () 
{

}

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.tag == "Untagged" || other.gameObject.tag == "Player")
		Destroy(gameObject);
}