//abstract factory design pattern
interface Stream{
    public void streamName();
}

interface College{
    public void collegeName();
}


class Cse implements Stream{
    public void streamName(){
        System.out.println("Computer Science & Technology");
    }
}

class It implements Stream{
    public void streamName(){
        System.out.println("Information & Technology");
    }
}

class Rkmgec implements College{
    public void collegeName(){
        System.out.println("Government Engineering College, purulia");
    }
}

class Ju implements College{
    public void collegeName(){
        System.out.println("Jadavpur University");
    }
}

interface BaseFactory{
    public College getCollege(String type);
    public Stream getStream(String type);
}

class CollegeFactory implements BaseFactory{
    public College getCollege(String type){
        if(type == "rkmgec")
        return new Rkmgec();
        else if (type == "ju")
        return new Ju();
        return null;
    }
    public Stream getStream(String type){
        return null;
    }
}

class StreamFactory implements BaseFactory{
    public Stream getStream(String type){
        if(type == "cse")
        return new Cse();
        else if(type == "it")
        return new It();
        
        return null;
    }
    public College getCollege(String type){
        return null;
    }
}


class Factory {
    public BaseFactory getInstance(String type){
        if(type == "college")
        return new CollegeFactory();
        else if (type == "stream")
        return new StreamFactory();
        
        return null;
    }
}



public class CollegeSystem{

     public static void main(String []args){
        Factory f = new Factory();
        BaseFactory college = f.getInstance("college");
        BaseFactory stream = f.getInstance("stream");
        College obj = college.getCollege("rkmgec");
        obj.collegeName();
        Stream obj1 = stream.getStream("cse");
        obj1.streamName();
     }
}