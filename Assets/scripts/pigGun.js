#pragma strict

var agent : NavMeshAgent;
var sight : int;
var player : Transform;
var lastShot : int;
var rate : int;

var projectile : GameObject;
var duration : int;
var speed : int;


function Start () 
{
	player = GameObject.Find("Player").transform;
	sight = 30;
	rate = 5;
	agent = GetComponent.<NavMeshAgent>();
	
	projectile = Resources.Load("pigBullet", GameObject);
	speed = 30;
	duration = 5;
}

function Update () 
{
	if(agent.remainingDistance < sight && lastShot + rate < Time.time)
	{
		shootPlayer();
	}
}

function shootPlayer()
{
	transform.LookAt(player);
	lastShot = Time.time;
	
	var clone : GameObject;
		clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.rigidbody.velocity = transform.TransformDirection(Vector3.forward * speed);
		Destroy(clone, duration);
		Physics.IgnoreCollision(clone.collider, collider);
	
}