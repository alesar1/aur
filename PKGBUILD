pkgname=bibcal-bin
pkgver=0.1.1
pkgdesc="CLI tool to calculating dates based on the Bible and the 1st Book of Enoch."
pkgrel=1
arch=(x86_64)
license=(ISC)
url="https://github.com/johanthoren/bibcal"
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
source=("${pkgname%-bin}-$pkgver::$url/releases/download/$pkgver/${pkgname%-bin}-linux-x86_64"
        "${pkgname%-bin}-$pkgver.sha256::$url/releases/download/$pkgver/${pkgname%-bin}-linux-x86_64.sha256"
        "${pkgname%-bin}-$pkgver.sha256.asc::$url/releases/download/$pkgver/${pkgname%-bin}-linux-x86_64.sha256.asc"
        "https://raw.githubusercontent.com/johanthoren/bibcal/$pkgver/LICENSE"
        "https://raw.githubusercontent.com/johanthoren/bibcal/$pkgver/README.md")
sha256sums=(
  "23fcbc77075106a69a26a3342132b92f220d324f862e37298fb2f5650f2dfba3"
  "6f520c33754bd7ed727cac42f2ae4be15a43043617bda1d29cc23d342dbe7869"
  SKIP
  "42ff7de4bd2675dff14a44fe4c2eb7d5b88f616f8206e72e9aa3a209f51365ba"
  "dd0a170a691bb722516f7f8075fcc34164bc53f807f63851b2f4b68f1169ff3c"
)
validpgpkeys=('2BEFDA8D830FA1E0C458915824EBD0202640D9B0') # Johan Thoren (GitHub Signing Key) <johan@thoren.xyz>

package() {
  install -Dm755 "${pkgname%-bin}-$pkgver" "$pkgdir/usr/bin/${pkgname%-bin}"
  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/${pkgname%-bin}"
  install -Dm644 README.md -t "$pkgdir/usr/share/doc/${pkgname%-bin}"
}
