# Maintainer: carstene1ns <arch carsten-teibes de> - http://git.io/ctPKG
# Contributor: rabyte <rabyte__gmail>

pkgname=alephone-eternalx
pkgver=1.2.0
pkgrel=1
pkgdesc="A free scenario for Aleph One that continues the story of the Marathon trilogy"
arch=('any')
url="http://eternal.bungie.org/"
license=('unknown')
depends=('alephone')
source=("http://eternal.bungie.org/files/_releases/EternalXv${pkgver//./}.zip"
        "$pkgname.sh"
        "$pkgname.desktop")
sha256sums=('9371761b625cf9786f86276ab17dfd52a1427e93e8fb72effa88f57435e83be3'
            '367eac6d3652cb0aaa2d66c74770190d0e8eccfb8e46acf7fc991d652bfc70d0'
            '57dfa56c798a325f4a673d608c71dd5dda73c06270229b6bdf2379a06b9a1df0')

prepare() {
  # remove Mac OS metadata
  find "Eternal $pkgver" -name .DS_Store -delete
}

package() {
  # scenario data
  install -d "$pkgdir"/usr/share/AlephOne/scenarios
  cp -r "Eternal $pkgver" "$pkgdir"/usr/share/AlephOne/scenarios/eternalx

  # sane permissions
  find "$pkgdir"/usr/share/AlephOne/scenarios/eternalx -type f -exec chmod 644 {} \;

  # launcher script and .desktop file
  install -Dm755 $pkgname.sh "$pkgdir"/usr/bin/$pkgname
  install -Dm644 $pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop
}
