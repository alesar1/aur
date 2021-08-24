# Maintainer: taotieren <admin@taotieren.com>

pkgname=xgcom-git
pkgver=0.4.2.r7.g78adb81
pkgrel=1
epoch=
pkgdesc="A gui tools to help guys develop series port, like minicom."
arch=('any')
url="https://github.com/helight/xgcom"
license=('GPL2')
groups=()
depends=('glib2' 'vte3' 'gtk2')
makedepends=('make' 'automake')
checkdepends=()
optdepends=()
provides=()
conflicts=(xgcom)
replaces=()
backup=()
options=('!strip')
install=
changelog=
source=("${pkgname%-git}::git+https://hub.fastgit.org/helight/xgcom.git")
noextract=()
sha256sums=('SKIP')
#validpgpkeys=()

pkgver() {
    cd "${srcdir}/${pkgname%-git}"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "${srcdir}/${pkgname%-git}"
    ./autogen.sh
    ./configure  --prefix=/usr
    make
}

package() {
    cd "${srcdir}/${pkgname%-git}"
    make DESTDIR=${pkgdir} install

    install -Dm0644 "${srcdir}/${pkgname%-git}/COPYING" "${pkgdir}/usr/share/licenses/${pkgname%-git}/COPYING"
    install -Dm0644 /dev/stdin "${pkgdir}/usr/share/metainfo/io.github.helight.xgcom.metainfo.xml" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<component type="desktop-application">
  <id>io.github.helight.xgcom</id>

  <name>${pkgname%-git}</name>
  <summary>${pkgname%-git}</summary>

  <metadata_license>MIT</metadata_license>
  <project_license>GPL-2.0-only</project_license>

  <description>
    <p>
      ${pkgdesc}
    </p>
  </description>

  <launchable type="desktop-id">io.github.helight.xgcom.desktop</launchable>
</component>
EOF

    install -Dm0644 /dev/stdin "${pkgdir}/usr/share/applications/io.github.helight.xgcom.desktop" << EOF
[Desktop Entry]
Version=1.0
Type=Application

Name=${pkgname%-git}
Comment=${pkgname%-git}
Categories=Network;GTK;

Icon=/usr/share/xgcom/pixmaps/${pkgname%-git}.png
Exec=${pkgname%-git}
Terminal=false
EOF
}
