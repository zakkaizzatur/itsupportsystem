import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerEditDialog } from "./customer-edit-dialog/CustomerEditDialog";
import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard";

export function CustomersPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/it-asset-management/customers/new");
    },
    openEditCustomerDialog: (id) => {
      history.push(`/it-asset-management/customers/${id}/edit`);
    },
    openDeleteCustomerDialog: (id) => {
      history.push(`/it-asset-management/customers/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/it-asset-management/customers/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/it-asset-management/customers/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/it-asset-management/customers/updateStatus");
    }
  }

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/it-asset-management/customers/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/it-asset-management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/it-asset-management/customers/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/it-asset-management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/it-asset-management/customers/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/it-asset-management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/it-asset-management/customers/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/it-asset-management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/it-asset-management/customers/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/it-asset-management/customers");
            }}
          />
        )}
      </Route>
      <Route path="/it-asset-management/customers/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/it-asset-management/customers");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
