import Link from "next/link";
import React, { useState } from "react";
import styles from './sidebar.module.css'
import { MenuOutlined } from "@mui/icons-material";
import AssessmentIcon from '@mui/icons-material/Assessment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export const SideBar = (props) => {

  const [collapsed, setCollapsed] = useState(false);

  const handleToggleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar className={styles.sidebar} collapsed={collapsed}
      rootStyles={{
        '.ps-sidebar-container': {
          background: '#46a1ff',
        },
        '.ps-submenu-content': {
          background: '#46a1ff',
        },
        'a:hover': {
          background: '#fff',
          color: '#46a1ff',
        },
        '.MuiSvgIcon-root': {
          fontSize: '36px',
        }
      }}>
      <Menu>
        {
          collapsed ? (
            <MenuItem
              icon={<MenuOutlined />}
              onClick={handleToggleClick}
            />
          ) : (
            <>
              {props.type == 'common' &&
                <>
                  <MenuItem
                    icon={<AssessmentIcon />}
                  >
                    <h2 className={styles.header}>
                      日報業務
                      <span onClick={handleToggleClick}> 〈 </span>
                    </h2>
                  </MenuItem>

                  <SubMenu className={styles.menu} label="日次業務">
                    <MenuItem component={<Link className="link" href="/#" />}> 配車表入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 運転日報入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 点呼 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> ALCインポート </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 車両経費入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 車両固定経費入力 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="勤怠管理">
                    <MenuItem component={<Link className="link" href="/#" />}> 勤怠予定入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 勤怠実績入力 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="事故処理">
                    <MenuItem component={<Link className="link" href="/#" />}> 交通事故入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 商品トラブル入力 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="締日">
                    <MenuItem component={<Link className="link" href="/#" />}> 請求 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 支払い </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="月次">
                    <MenuItem component={<Link className="link" href="/#" />}> 社内管理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 得意先管理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 外注先管理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 車両管理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 経費管理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> その他 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="帳薄出力">
                    <MenuItem component={<Link className="link" href="/#" />}> 日報入カチェックリスト </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 経費チェックリスト </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 請求系 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 支払系 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 得意先管理台帳 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 得意先売上推移表 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 外注先管理台帳 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 外注先支払推移表 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 外注先別差益一覧 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 車両管理台帳 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 車両別収支実績明細表 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 車両経費単価入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 経費台帳 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 使用明細表 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 社内付葵集計表 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 安全管理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 交通事故控除一覧 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 商品トラブル控除一覧 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="予算管理">
                    <MenuItem component={<Link className="link" href="/#" />}> 予算入力 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="マスタ保守">
                    <MenuItem component={<Link className="link" href="/#" />}> 得意先マスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 外注先マスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 車両マスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 従業員マスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 営業所マスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 運行コースマスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 仕和先マスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 車種マスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 車格マスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> デジタコマスタ入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 分類マスタ入力 </MenuItem>
                  </SubMenu>
                </>}

              {props.type == 'delivery' &&
                <>
                  <MenuItem
                    icon={<LocalShippingIcon />}
                  >
                    <h2 className={styles.header}>
                      配車業務
                      <span onClick={handleToggleClick}> 〈 </span>
                    </h2>
                  </MenuItem>

                  <SubMenu className={styles.menu} label="受信処理">
                    <MenuItem component={<Link className="link" href="/#" />}> 受信処理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 受注入力 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="配車処理・帳簿">
                    <MenuItem component={<Link className="link" href="/#" />}> 配車入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 運行指示書 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> ピッキングリスト </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 配車一覧表 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 受注・配車データリスト </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 配送明細 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 応対履歴 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 応対履歴出力 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="伝票出力">
                    <MenuItem component={<Link className="link" href="/#" />}> 出庫表 (UCC) </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 出庫表 (ヒガシマル) </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 出庫表 (マツキヨ) </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="事後処理・帳簿">
                    <MenuItem component={<Link className="link" href="/#" />}> P研発行チェック処理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> パレット伝票発行 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 引取チェック処理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 引取確認処理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 受領書チェック </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 抽出処理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> パレット伝票発行 (白紙) </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> JPR データ作成 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="支払い処理">
                    <MenuItem component={<Link className="link" href="/#" />}> 支払入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 支払一覧表 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 支払単価設定 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="請求処理">
                    <MenuItem component={<Link className="link" href="/#" />}> 運賃入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> ユアサザ運賃入力 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 売上一覧表 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 運賃単価設定 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> ユアサザ運賃単価設定 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 運賃単価商品別設定 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="マスタ保守">
                    <MenuItem component={<Link className="link" href="/#" />}> グループ設定 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> SB得意先マスタ保守 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> ルートマスタ保守 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 得意先ルートマスタ保守 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 出荷基地マスタ保守 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 郵便番号マスタ保守 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 締日の管理 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 運転者台帳 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> メニュー権限設定 </MenuItem>
                  </SubMenu>
                  <SubMenu className={styles.menu} label="統一納品先保守">
                    <MenuItem component={<Link className="link" href="/#" />}> 納品先マスタ保守 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 統一納品先マスタ保守 </MenuItem>
                    <MenuItem component={<Link className="link" href="/#" />}> 統一納品先統合設定 </MenuItem>
                  </SubMenu>
                </>}
            </>
          )}
      </Menu>
    </Sidebar >
  )
}
