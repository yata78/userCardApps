class Solution{
    public static String fruitImgUrl(String fruit){
     
        fruit = fruit.toLowerCase();

        switch (fruit) {
            case "banana":
                return "url1";        
            case "pineapple":
                return "url2";
            case "pear":
                return "url3";
            default:
                return "no image";
        }
    }
}
