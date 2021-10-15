# Maintainer: dr460nf1r3 <dr460nf1r3 at garudalinux dot org>

pkgname=whoogle
pkgver=0.6.0
pkgrel=2
pkgdesc='A self-hosted, ad-free, privacy-respecting metasearch engine'
arch=(x86_64 aarch64)
url="https://github.com/benbusby/whoogle-search"
license=(MIT)
depends=(python)
makedepends=(python python-pip)
conflicts=($pkgname-git)
source=("$pkgname-$pkgver.tar.gz::https://github.com/benbusby/whoogle-search/archive/refs/tags/v$pkgver.tar.gz"
        $pkgname.service
        $pkgname.conf)
sha256sums=('034827d32f7acf49bb53bf5c18b5a8a9926e613b7f52d2370cb7ba3d0b33cc10'
            '7630105a0613d6758f0e298a8d197f307cb2d1657f7cedf10dc340c8f21c4511'
            '51cda92f3ad2166eb2cb63ff80561f48b39688a57b66291d2eee5e1c7fcd8ee3')
install=$pkgname.install

prepare() {
  mv $pkgname-search-$pkgver $pkgname-search
}

build() {
  # Following official instructions
  cd $pkgname-search
  python3 -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt
  
  # Cleanup unsed
  rm -r docs test .dockerignore .gitignore .replit docker-compose.yml Dockerfile heroku.yml MANIFEST.in README.md requirements.txt setup.py
}

package() {
  install -m0644 "$srcdir/whoogle.conf" "$pkgdir/usr/lib/sysusers.d/whoogle.conf"
  install -m0644 "$srcdir/whoogle.service" "$pkgdir/usr/lib/systemd/system/whoogle.service"
  install -dm0755 "$pkgdir/opt/whoogle-search"
  cp -r "$srcdir/$pkgname-search/" "$pkgdir/opt/"
}
