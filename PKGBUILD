
pkgname=pinegrow
pkgver=6
pkgrel=1
pkgdesc='A website development tool for building responsive websites'
arch=('x86_64')
url="https://pinegrow.com"
license=('custom:pinegrow')
depends_x86_64+=(gtk2 gconf-gtk2 alsa-lib nss libxss libxtst)
makedepends=(gendesk unzip)
source=("http://download.pinegrow.com/PinegrowLinux64.${pkgver}.zip"
	"${pkgname}.png"
  "LICENSE")
sha512sums=('c83478b5bdfe4529dff5424f404ff80c558c93c158b062409d3bae9fb03fa1fcb066a9164c8385c279f51fcecfb7866e7d3205b597fd00f1645dc39af0dc22e9'
            'e71d7bfa237604fdf183cf1dc61e674c3f0ee9a33609f5c2aa6adf3b0359acd12f6ff2c1deeec52128461327c0fde013f4e1cc6fc5170e21f09b7fb01a4f334e'
            '1f2dd46c34bac1d218176f977eec05811982f1f74ead24deadb64717bb64059122e056ee1c95de34e207dd9e90107ce2f7187a4d6781f024257a7c2d7d605967')


options=('!strip')
install=${pkgname}.install

prepare() {
  cd "${srcdir}"

  unzip -qqo "PinegrowLinux64.${pkgver}.zip" -d "Pinegrow-${pkgver}"

  cd Pinegrow-${pkgver}
  gendesk --pkgname "$pkgname" --pkgdesc "$pkgdesc" --icon /usr/share/pixmaps/$pkgname.png
}

package() {
  cd ${srcdir}
  install -d ${pkgdir}/usr/share/pinegrow/
  cd Pinegrow-${pkgver}
  cp -R * ${pkgdir}/usr/share/pinegrow/
  rm ${pkgdir}/usr/share/$pkgname/{$pkgname.png,$pkgname.desktop,Pinegrow.desktop,readme.txt}

  install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 ${srcdir}/$pkgname.png $pkgdir/usr/share/pixmaps/$pkgname.png
  
  # Text extracted from Pinegrow_EULA.pdf
  install -Dm644 ${srcdir}/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
