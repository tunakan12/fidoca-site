// フィドカ Web 共通設定。
// ここに置く値はすべて「公開して安全な」もののみ。
// - Supabase anon(publishable)キー: 公開前提の鍵。RLS でデータを保護している。
// - RevenueCat Web Billing 公開キー: rcb_ で始まる公開鍵。秘密鍵(sk_/RC_SECRET_API_KEY)は絶対に置かない。
window.FIDOCA_CONFIG = {
  // Supabase 認証(モバイルアプリと同一プロジェクト = 同じユーザー/購読を共有)
  SUPABASE_URL: 'https://kgvjuuevksfnkdysyslr.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_gAZ3unG1CRptFy63NVH0Ew_Uv78Wj2W',

  // RevenueCat Web Billing(Stripe 決済)。
  // RevenueCat ダッシュボードで Web Billing を有効化し、公開APIキー(rcb_...)を発行して貼り付ける。
  // 既存の revenuecat-webhook が RC_BILLING(=Web Billing) を store='stripe' として subscriptions に反映するため、
  // ここを設定するだけで「Webで契約 → モバイルでも Pro 有効」が成立する。
  REVENUECAT_WEB_BILLING_KEY: '', // 例: 'rcb_xxxxxxxxxxxxxxxxxxxx'

  // エンタイトルメント識別子(RevenueCat の Entitlement / webhook と一致させる)
  ENTITLEMENT_PRO: 'pro',
  ENTITLEMENT_PRO_PLUS: 'pro_plus',

  // RevenueCat Offering 内の Package 識別子(任意。未指定なら current offering の先頭から探す)
  PACKAGE_PRO: 'pro_monthly',
  PACKAGE_PRO_PLUS: 'pro_plus_monthly',

  APP_STORE_URL:
    'https://apps.apple.com/jp/app/%E3%83%95%E3%82%A3%E3%83%89%E3%82%AB/id6781597740',
  SUPPORT_EMAIL: 'support@fidoca.jp',
};
