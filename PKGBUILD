#Maintainer: Ali Molaei <ali dot molaei at protonmail dot com>

pkgname="mongodb-bin"
pkgver="4.0.9"
basever="4.0"
pkgrel="1"
pkgdesc="A high-performance, open source, schema-free document-oriented database"
arch=("x86_64")
url="https://www.mongodb.com/"
license=("SSPLv1")
provides=("mongodb=$pkgver")
conflicts=("mongodb")
optdepends=("mongodb-tools: The MongoDB tools provide import, export, and diagnostic capabilities.")
source=(
    "https://repo.mongodb.org/apt/ubuntu/dists/bionic/mongodb-org/${basever}/multiverse/binary-amd64/mongodb-org-shell_${pkgver}_amd64.deb"
    "https://repo.mongodb.org/apt/ubuntu/dists/bionic/mongodb-org/${basever}/multiverse/binary-amd64/mongodb-org-server_${pkgver}_amd64.deb"
    "https://repo.mongodb.org/apt/ubuntu/dists/bionic/mongodb-org/${basever}/multiverse/binary-amd64/mongodb-org-mongos_${pkgver}_amd64.deb"
    "mongodb.service"
    "mongodb.conf"
    "mongodb.sysusers"
    "mongodb.tmpfiles"
    "LICENSE")

sha256sums=("2641dfb47e5c79bb03c2adc7df0993901c6f8a0f9722a43076f0c222a0324673"
	    "7f5834943b9869ac395e5713a654680876f6eb4fa8abc813aa0e9f6f69503612"
            "25765030ac6441185d3a20e6e95bc9401158b723586e759cfd635127ed7f2b79"
            "19f55ab28652b3817e98fc3f15cc2f6f3255a5e1dfd7b0d5a27c9ba22fd2703e"
            "8010ce728d657524cd76b5afda7ffbc1cc389642336b12b89cec5df2b09fc0e4"
            "47b884569102f7c79017ee78ef2e98204a25aa834c0ee7d5d62c270ab05d4e2b"
            "51ee1e1f71598aad919db79a195778e6cb6cfce48267565e88a401ebc64497ac"
            "09d99ca61eb07873d5334077acba22c33e7f7d0a9fa08c92734e0ac8430d6e27")

backup=("etc/mongodb.conf")

prepare() {
  cd "${srcdir}"
  mkdir -p "${srcdir}/output"
  tar -xvf "${srcdir}/data.tar.xz" -C "${srcdir}/output" #mongos extracted
  ar x mongodb-org-server_${pkgver}_amd64.deb
  tar -xvf "${srcdir}/data.tar.xz" -C "${srcdir}/output" #server extracted
  ar x mongodb-org-shell_${pkgver}_amd64.deb
  tar -xvf "${srcdir}/data.tar.xz" -C "${srcdir}/output" #shell extracted
}

package() {
  mkdir -p "$pkgdir/usr"
  mkdir -p "$pkgdir/usr/share/man"
  cp -r "$srcdir/output/usr/bin" "$pkgdir/usr/"
  cp -r "$srcdir/output/usr/share/man/man1" "$pkgdir/usr/share/man/"
  install -Dm644 "$srcdir/mongodb.conf" "$pkgdir/etc/mongodb.conf"
  install -Dm644 "$srcdir/mongodb.service" "$pkgdir/usr/lib/systemd/system/mongodb.service"
  install -Dm644 "$srcdir/mongodb.sysusers" "$pkgdir/usr/lib/sysusers.d/mongodb.conf"
  install -Dm644 "$srcdir/mongodb.tmpfiles" "$pkgdir/usr/lib/tmpfiles.d/mongodb.conf"
  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
