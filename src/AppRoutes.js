import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import RecommendationsListPage from "./pages/recommendations/RecommendationsListPage";
import RecommendationCreateEditForm from "./components/recommendation/RecommendationCreateEditForm";
import RecommendationPage from "./pages/recommendations/RecommendationPage";
import RecommendationRouter from "./pages/recommendations/RecommendationRouter";
import RequestCreateForm from "./components/request/RequestCreateForm";
import RequestPage from "./pages/requests/RequestPage";
import RequestsRouter from "./pages/requests/RequestsRouter";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/profiles/ProfilePage";

export function AppRoutes({ profile_id }) {
  return (
    <Switch>
      {/* General Routes */}
      <Route exact path="/signin" render={() => <SignInForm />} />
      <Route exact path="/signup" render={() => <SignUpForm />} />
      <Route exact path="/profile" render={() => <h1>Profile</h1>} />
      <Route exact path="/logout" render={() => <h1>Logout</h1>} />

      {/* Profile Routes */}
      <Route exact path="/profiles/:id" render={() => <ProfilePage />} />

      {/* Recommendations Routes */}
      <Route
        exact
        path="/recommendations/create/:receiver_id"
        render={() => <RecommendationCreateEditForm />}
      />
      <Route
        exact
        path="/recommendations/:id"
        render={() => <RecommendationPage />}
      />
      <Route
        exact
        path="/"
        render={() => <RecommendationRouter profile_id={profile_id} />}
      />
      <Route
        exact
        path="/boosted"
        render={() => (
          <RecommendationsListPage
            filter={`boosts__profile=${profile_id}&ordering=-boosts__created_at&`}
          />
        )}
      />

      {/* Requests Routes */}
      <Route
        exact
        path="/requests/create/:receiver_id"
        render={() => <RequestCreateForm />}
      />
      <Route exact path="/requests/:id" render={() => <RequestPage />} />
      <Route
        exact
        path="/requests"
        render={() => <RequestsRouter profile_id={profile_id} />}
      />

      {/* 403 Route */}
      <Route exact path="/un-authorised" render={() => <ErrorPage />} />

      {/* 404 Route */}
      <Route exact path="/not-found" render={() => <NotFoundPage />} />
      <Route render={() => <NotFoundPage />} />
    </Switch>
  );
}
