# Contributor: Fabio ‘Lolix’ Loli <lolix at disroot dot org>
# Contributor: Daniel Miranda <dmiranda at gmail dot com>
# Contributor: Mark Wagie <yochanan dot marqos at gmail dot com>
# Maintainer: Sam Burgos <sam.burgos1089 at gmail dotcom>
# Maintainer: Gustavo Costa <gusbemacbe ar gmail dot com>

pkgname=suru-plus-pack-git
pkgver=20.4.1
pkgrel=2
pkgdesc="The complete collection of Suru++ icons themes, based on Sam Hewitt's Suru Icons"
arch=('any')
license=('GPL3')
depends=('gtk-update-icon-cache'
    'hicolor-icon-theme')
provides=("suru-plus-pack")
conflicts=("suru-plus-pack" 
    "suru-plus"
    "suru-plus-dark"
    "suru-plus-telinkrin")
makedepends=('git')
options=('!strip')
source=('git+https://github.com/gusbemacbe/suru-plus'
        'git+https://github.com/gusbemacbe/suru-plus-dark'
        'git+https://github.com/gusbemacbe/suru-plus-telinkrin')
sha256sums=('SKIP'
            'SKIP'
            'SKIP')

#pkgver() 
#{
#  cd suru-plus
#  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
#}

package() 
{
  # Installing the icons theme
  install -d "${pkgdir}"/usr/share/icons

  # Copying and changing name to "Suru++", "Suru++-Dark" and "Suru++-Telinkrin"
  cp -r "${srcdir}"/suru-plus "${pkgdir}"/usr/share/icons/Suru++
  cp -r "${srcdir}"/suru-plus-dark "${pkgdir}"/usr/share/icons/Suru++-Dark
  cp -r "${srcdir}"/suru-plus-telinkrin "${pkgdir}"/usr/share/icons/Suru++-Telinkrin

  find "${pkgdir}"/usr -type f -exec chmod 644 {} \;
  find "${pkgdir}"/usr -type d -exec chmod 755 {} \;

  # Deleting unneeded files from Suru++ icon
  rm -r "$pkgdir"/usr/share/icons/Suru++/.git
  rm -r "$pkgdir"/usr/share/icons/Suru++/.gitignore
  rm -r "$pkgdir"/usr/share/icons/Suru++/*.md

  # Deleting unneeded files from Suru++ Dark icon
  rm -r "$pkgdir"/usr/share/icons/Suru++-Dark/.git
  rm -r "$pkgdir"/usr/share/icons/Suru++-Dark/.github
  rm -r "$pkgdir"/usr/share/icons/Suru++-Dark/.gitattributes
  rm -r "$pkgdir"/usr/share/icons/Suru++-Dark/.gitignore
  rm -r "$pkgdir"/usr/share/icons/Suru++-Dark/*.md
  rm -r "$pkgdir"/usr/share/icons/Suru++-Dark/*.svg
  rm -r "$pkgdir"/usr/share/icons/Suru++-Dark/*.png

  # Deleting unneeded files from Suru++ Telinkrin icon
  rm -r "$pkgdir"/usr/share/icons/Suru++-Telinkrin/.git
  rm -r "$pkgdir"/usr/share/icons/Suru++-Telinkrin/*.md
}
