# Maintainer: Andy Makovec <andymakovec[at]gmail[dot]com>
# Contributor: Rachel Mant <dx-mon[at]users[dot]sourceforge[dot]net>

pkgname=kicad-nightly-bin
_pkgname=kicad-nightly
provides=('kicad-nightly')
conflicts=('kicad-nightly')
pkgdesc='Electronic schematic and printed circuit board (PCB) design tools'
arch=('x86_64')
url='http://kicad-pcb.org/'
license=('GPLv3')
depends=('kicad' 'boost-libs' 'glm' 'glew' 'curl' 'ngspice' 'opencascade' 'wxgtk3' 'python-wxpython' 'python' 'libcloudproviders' 'glew-2.1')
options=('!strip') # strips symbols from binaries and libraries (potentially resulting in better performance and sometimes significantly less disk space usage)
optdepends=(
	'kicad-library-nightly: for footprints and symbols'
	'kicad-library-3d-nightly: for 3d models of components'
)
pkgrel=1
source=(
    'https://launchpad.net/~kicad/+archive/ubuntu/kicad-dev-nightly/+files/kicad-nightly_202201250117+be5bb8c4bd~146~ubuntu21.04.1_amd64.deb'
    'kicad-nightly.env'
)

pkgver=202201250117+be5bb8c4bd
sha256sums=(
    '5258fedb87286f541076582071762ee733ae50ba14c0d49286664ce1e052e8f2'
    'fce26af6b9c181a99197bfc9bc6c778561ad55a375480f4d0d73bb34078b5d18'
)

package() {
	tar xf data.tar* -C "${pkgdir}"
    install -d "${pkgdir}/usr/bin"

    cp kicad-nightly.env "$pkgdir/usr/share/kicad-nightly/kicad-nightly.env"
    cat > "$pkgdir/usr/bin/$prog-nightly" <<EOF
#!/bin/sh
. /usr/share/kicad-nightly/kicad-nightly.env
exec /usr/lib/kicad-nightly/bin/$prog
EOF

    #install -Dm755 "${srcdir}"/ "${pkgdir}"/
}