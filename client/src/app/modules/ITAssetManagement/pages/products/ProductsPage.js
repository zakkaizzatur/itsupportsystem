import React from "react";
import { Route } from "react-router-dom";
import { ProductsLoadingDialog } from "./products-loading-dialog/ProductsLoadingDialog";
import { ProductDeleteDialog } from "./product-delete-dialog/ProductDeleteDialog";
import { ProductsDeleteDialog } from "./products-delete-dialog/ProductsDeleteDialog";
import { ProductsFetchDialog } from "./products-fetch-dialog/ProductsFetchDialog";
import { ProductsUpdateStatusDialog } from "./products-update-status-dialog/ProductsUpdateStatusDialog";
import { ProductsCard } from "./ProductsCard";
import { ProductsUIProvider } from "./ProductsUIContext";

export function ProductsPage({ history }) {
  const productsUIEvents = {
    newProductButtonClick: () => {
      history.push("/it-asset-management/products/new");
    },
    openEditProductPage: (id) => {
      history.push(`/it-asset-management/products/${id}/edit`);
    },
    openDeleteProductDialog: (id) => {
      history.push(`/it-asset-management/products/${id}/delete`);
    },
    openDeleteProductsDialog: () => {
      history.push(`/it-asset-management/products/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      history.push(`/it-asset-management/products/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      history.push("/it-asset-management/products/updateStatus");
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path="/it-asset-management/products/deleteProducts">
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/it-asset-management/products");
            }}
          />
        )}
      </Route>
      <Route path="/it-asset-management/products/:id/delete">
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/it-asset-management/products");
            }}
          />
        )}
      </Route>
      <Route path="/it-asset-management/products/fetch">
        {({ history, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/it-asset-management/products");
            }}
          />
        )}
      </Route>
      <Route path="/it-asset-management/products/updateStatus">
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/it-asset-management/products");
            }}
          />
        )}
      </Route>
      <ProductsCard />
    </ProductsUIProvider>
  );
}
