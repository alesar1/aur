# Mainintainer : Lucas Rooyakkers <lucas dot rooyakkers at pm dot me>
pkgname=citybound-bin
pkgver=0.1.2
pkgrel=823
license=('GPL3')
pkgdesc="A city building game that uses microscopic models to vividly simulate the organism of a city arising from the interactions of millions of individuals."
url="https://aeplay.org/citybound"
arch=('x86_64')
provides=('citybound')
conflicts=()
source=("https://citybound-livebuilds.s3.amazonaws.com/citybound-v0.1.2-823-gdfa71eb-linux.tar.gz")
md5sums=('b280d48e57ed1d92b1b15606bf159050')

package() {
  tar -xzvf "citybound-v0.1.2-814-gf3cb7cb-linux.tar.gz"
  install -Dm755 "citybound-v0.1.2-814-gf3cb7cb" "$pkgdir/usr/bin/citybound"
}
