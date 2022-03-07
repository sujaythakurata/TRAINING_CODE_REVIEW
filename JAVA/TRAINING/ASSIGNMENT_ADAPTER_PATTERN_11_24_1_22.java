//Adapter Pattern
interface Movie{
    public void getMovieDetails();
    public void getCustomerDetails();
}

class MovieDetails{
    public String movieName = "SpiderMan No way home";
    public String movieTime = "14:00 - 16:00";
    public String movieDate = "24/1/22";
}

class MovieCustomer extends MovieDetails implements Movie{
    
    public String name;
    public int headCount = 0;
    
    MovieCustomer(String name, int headCount){
        this.name = name;
        this.headCount = headCount;
    }
    
    public void getMovieDetails(){
        System.out.println("Movie Name: "+this.movieName);
        System.out.println("Movie Date: "+this.movieDate);
        System.out.println("Movie Time: "+this.movieTime);
    }
    
    public void getCustomerDetails(){
        System.out.println("Name: "+this.name);
        System.out.println("Head Count: "+this.headCount);
    }
}




public class AdapterPattern{

     public static void main(String []args){
        Movie movie1 = new MovieCustomer("Sujay Thakurata", 4);
        movie1.getMovieDetails();
        movie1.getCustomerDetails();
     }
}
