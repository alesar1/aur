# Maintainer: Conor Anderson <conor@conr.ca>
pkgname=purevpn-openvpn
pkgver=2017.07.04
pkgrel=2
pkgdesc='OpenVPN hackery to add PureVPN to NetworkManager'
arch=('any')
url='https://www.purevpn.com/'
license=('GPL')
depends=('bash' 'networkmanager-openvpn')
source=("linux-files.zip::https://s3-us-west-1.amazonaws.com/heartbleed/linux/linux-files.zip"
        "template"
        "purevpn")
sha256sums=('32ee473d414691438618d68740c7060ad1218719e13b41561b18c3d0a659ae01'
            '7b724c0bcd60e71d81083443529d46018c795d3b9dedc21c477529f004497ee7'
            '175a6b855e3da1a59cbbf3b2a0840086c564c0670ba3f1365911e6365b5e1307')
noextract=("linux-files.zip")
install="${pkgname}".install

prepare() {
  cd "${srcdir}"

  msg2 "Extracting Certifications..."
  bsdtar -xf linux-files.zip -s'|[^/]*/||' "*.key" "*.crt"

  msg2 "Extracting OpenVPN Configurations..."
  mkdir "vpn-configs"
  bsdtar -xf linux-files.zip  -s'|[^/]*/||' -C vpn-configs *.ovpn
  rm vpn-configs/UDP/test-udp.ovpn
}

package() {
  install -dm755 "${pkgdir}"/usr/bin
  install -dm755 "${pkgdir}"/usr/lib/purevpn
  install -D -m 755 "${startdir}/purevpn" "${pkgdir}"/usr/bin
  install -D -m 644 "${startdir}/template" "${pkgdir}"/usr/lib/purevpn
  cd "${srcdir}"
  cp -a vpn-configs "${pkgdir}"/usr/lib/purevpn
  install -Dm644 {ca.crt,Wdc.key} "${pkgdir}"/usr/lib/purevpn
}

