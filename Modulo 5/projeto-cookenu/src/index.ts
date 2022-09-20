import { app } from "./app";
import RecipeEndpoint from "./endpoints/Recipe";
import UserEndpoint from "./endpoints/User";


const userEndpoint = new UserEndpoint()
const recipeEndpoint = new RecipeEndpoint()

app.post("/criar-usuario",userEndpoint.create)
app.post("/login",userEndpoint.login)
app.get("/user/profile",userEndpoint.getProfile)
app.post("/userFollow/follow",userEndpoint.followUser)
app.post("/userUnFollow/unfollow",userEndpoint.unfollowUser)
app.get("/user/:id",userEndpoint.getAnotherProfile)
app.get("/feed-recipe",userEndpoint.feed)
app.delete("/deletar-conta/:id",userEndpoint.deleteAccount)

app.post("/criar-receita",recipeEndpoint.create)
app.get("/recipe/:id",recipeEndpoint.searchRecipe)
app.put("/editar-receita/:id",recipeEndpoint.editRecipe)
app.delete("/deletar-receita/:id",recipeEndpoint.deleteRecipe)