import { I18nProvider } from "react-admin";

export const i18nProvider: I18nProvider = {
  translate: (key, options) => {
    const { offsetBegin, offsetEnd, total, name, field } = options || {};
    switch (key) {
      case "ra.action.refresh":
        return "Refresh";
      case "ra.action.create":
        return "Create New Project";
      case "ra.action.edit":
        return "Configure";
      case "ra.action.show":
        return "Inspect";
      case "ra.action.export":
        return "Export Projects";
      case "resources.apartments.fields.name":
        return "Apartment";
      case "resources.projects.fields.stockwerk":
        return "Floor";
      case "resources.projects.fields.name":
        return "Project";
      case "resources.projects.fields.wohnFlaeche":
        return "Living Area";
      case "resources.projects.fields.apartments":
        return "Apartment";
      case "ra.navigation.page_rows_per_page":
        return "Rows per page:";
      case "ra.navigation.page_range_info":
        return `${offsetBegin}-${offsetEnd} of ${total}`;
      case "ra.action.save":
        return "Save";
      case "ra.action.delete":
        return "Delete";
      case "ra.auth.logout":
        return "Logout";
      case "ra.auth.user_menu":
        return "Profile";
      case "ra.page.loading":
        return "Loading data";
      case "ra.message.loading":
        return "Please wait a moment";
      case "ra.action.add_filter":
        return "Filter";
      case "ra.action.remove_all_filters":
        return "Remove all filters";
      case "ra.saved_queries.new_label":
        return "Save current filter...";
      case "ra.saved_queries.remove_label_with_name":
        return `Delete filter ${name}`;
      case "ra.saved_queries.remove_dialog_title":
        return "Delete Filter";
      case "ra.saved_queries.remove_message":
        return "Are you sure you want to delete this filter from your list of saved filters?";
      case "ra.action.cancel":
        return "Cancel";
      case "ra.action.confirm":
        return "Confirm";
      case "ra.notification.updated":
        return "Successfully updated";
      case "ra.notification.deleted":
        return "Successfully deleted";
      case "ra.action.undo":
        return "Undo";
      case "ra.action.move_up":
        return "Move up";
      case "ra.action.move_down":
        return "Move down";
      case "ra.action.remove":
        return "Remove entry";
      case "ra.action.add":
        return "Add entry";
      case "ra.action.clear_array_input":
        return "Remove all entries";
      case "ra.message.clear_array_input":
        return "Are you sure you want to remove all entries?";
      case "ra.navigation.no_results":
        return "No entries available";
      case "ra.navigation.no_filtered_results":
        return "No entries matching the current filter";
      case "ra.navigation.clear_filters":
        return "Clear all filters";
      case "ra.sort.sort_by":
        return `Sort by ${field}, ascending/descending`;
      case "ra.saved_queries.new_dialog_title":
        return "Save new filter";
      case "ra.saved_queries.query_name":
        return "Filter name";
      case "ra.auth.username":
        return "Username";
      case "ra.auth.password":
        return "Password";
      case "ra.auth.sign_in":
        return "Sign in";
      case "ra.page.error":
        return "An error occurred";
      case "ra.message.error":
        return "Please report this error by taking a screenshot of this page and emailing us.";
      case "ra.action.back":
        return "Back";
      case "ra.auth.auth_check_error":
        return "You are not logged in.";
      case "ra.message.invalid_form":
        return "Please correct the errors and try again.";
      case "ra.notification.item_doesnt_exist":
        return "This entry does not exist.";
      case "ra.message.unsaved_changes":
        return "You have unsaved changes. Do you really want to leave this page?";
      case "custom.action.save_and_stay":
        return "Save";
      case "custom.action.delete":
        return "Delete";
      case "custom.action.delete_confirm_title":
        return "Are you sure?";
      case "custom.action.delete_confirm_content":
        return "Do you really want to delete this record? This action is permanent and cannot be undone.";
      case "ra.notification.created":
        return "Successfully created";
      case "resources.projects.empty":
        return "No projects available";
      case "resources.projects.invite":
        return "Create the first project by clicking here";
      case "ra.page.not_found":
        return "The requested page was not found";
      case "ra.message.not_found":
        return "Please contact support";
      case "ra.notification.data_provider_error":
        return "An error occurred while saving. Please try again.";
      case "ra.validation.required":
        return "required";
      default:
        return key;
    }
  },
  changeLocale: () => Promise.resolve(),
  getLocale: () => "en",
};

export const sharedTexts = {
  raeumeMitFliesen: "Rooms with tiles",
};
