import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuComponent } from './side-menu/menu/menu.component';
import { MenuItemComponent } from './side-menu/menu/menu-item/menu-item.component';
import { FeedComponent } from './feed/feed.component';
import { StoriesComponent } from './feed/stories/stories.component';
import { StoryComponent } from './feed/stories/story/story.component';
import { FilterComponent } from './feed/filter/filter.component';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { FeedListItemComponent } from './feed/feed-list/feed-list-item/feed-list-item.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { TopBarComponent } from './right-panel/top-bar/top-bar.component';
import { SuggestionsComponent } from './right-panel/suggestions/suggestions.component';
import { SuggestionsItemComponent } from './right-panel/suggestions/suggestions-item/suggestions-item.component';
import { LatestPostComponent } from './right-panel/latest-post/latest-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MenuComponent,
    MenuItemComponent,
    FeedComponent,
    StoriesComponent,
    StoryComponent,
    FilterComponent,
    FeedListComponent,
    FeedListItemComponent,
    RightPanelComponent,
    TopBarComponent,
    SuggestionsComponent,
    SuggestionsItemComponent,
    LatestPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
