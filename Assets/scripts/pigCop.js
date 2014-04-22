#pragma strict

	var player : Transform;
	var health : int;
	var agent: NavMeshAgent;
	
function Start () 
{
	health = 10;
	player = GameObject.Find("Player").transform;
	agent = GetComponent.<NavMeshAgent>();
	agent.SetDestination(player.transform.position);
}

function Update()
{
	if(health <= 0)
	{
		Destroy(gameObject);
		Destroy(this);
	}
	else
	{
		agent.SetDestination(player.position);
	}
}

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.tag == "Projectile")
		health -= 2;
}