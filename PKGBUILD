# Maintainer: grimi <grimi at poczta dot fm>

pkgname=matcha-gtk-theme
pkgver=3.4
pkgrel=1
pkgdesc="A flat design theme for GNOME, MATE, Openbox, Unity, XFCE, Budgie"
arch=('any')
url='https://www.gnome-look.org/p/1187179'
license=('GPL3')
depends=('gtk-engine-murrine' 'gtk-engines' 'gtk3')
_hash_time=($(curl -s "$url"|grep -e "hash =" -e "timetamp ="|sed "s/.*= '\(.*\)';/\1/"))
source=("${pkgname}-${pkgver}.tar.xz::https://dl.opendesktop.org/api/files/downloadfile/id/1516864754/s/${_hash_time[0]}/t/${_hash_time[1]}/Matcha.tar.xz"
        "${pkgname}-dark-${pkgver}.tar.xz::https://dl.opendesktop.org/api/files/downloadfile/id/1516864756/s/${_hash_time[0]}/t/${_hash_time[1]}/Matcha-dark.tar.xz")

sha256sums=('5a4bdd40e5de90aae3f193dd30b958fa74454474b36d6f54d91e81e65f19f4db'
            'af8792eb79bbb0ad73db17a68f1b0057d30e75bff3611777b13ddb9e77913553')


prepare() {
   sed -i 's/\(menu.border.width:\).*$/\1 1/' Matcha{,-dark}/openbox-3/themerc
   sed -i 's/\(menu.items.text.color:\).*$/\1 #d3c2c5/; s/\(menu.items.bg.color:\).*$/\1 #1f2729/;
         s/\(menu.border.color:\).*$/\1 #2d3036/; s/\(menu.seperator.color:\).*$/\1 #32353b/' \
         Matcha-dark/openbox-3/themerc
}

package() {
   find Matcha{,-dark}/ -type f ! -name thumbnail.png -exec install -Dm644 "{}" "${pkgdir}/usr/share/themes/{}" \;
   find Matcha{,-dark}/ -type l -exec cp -d  "{}" "${pkgdir}/usr/share/themes/{}" \;
}

