#pragma strict

var pig : GameObject;
var spawn : boolean;
var startTime : int;
var waveSize : int;

function Start () 
{
	pig = Resources.Load("PigCop", GameObject);
	spawn = false;
	startTime = Time.time;
	waveSize = 1;
}

function Update () 
{
	if(Time.time > startTime + 10)
	{
		spawn = true;
		startTime = Time.time;
	}
		
	if(spawn)
	{
		var x : float;
		var z : float;
		for(var i = 0; i < waveSize; i++)
		{
			x = Random.Range(0, 20);
			z = Random.Range(0, 20);
			var location = new Vector3(x, 1.42f, z);
			
			var clone : GameObject;
			clone = Instantiate(pig, location, transform.rotation);
		}
		spawn = false;
		waveSize++;
	}
}