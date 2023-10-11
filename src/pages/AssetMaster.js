import React, { useState } from "react";
import AssetDetail from "./AssetDetail";
import AssetMinder from "./AssetMinder";

function AssetMaster() {
  const [assetDetail, setAssetDetail] = useState({});
  const [maintenanceData, setMaintenanceData] = useState({});
  return (
    <>
      <div>
        <AssetDetail asset={assetDetail}></AssetDetail>
      </div>
      <div>
        <AssetMinder
          maintenance={maintenanceData}
          applyMaintenance={setMaintenanceData}
        ></AssetMinder>
      </div>
    </>
  );
}

export default AssetMaster;
