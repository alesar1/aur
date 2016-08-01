# Maintainer: Jesse Spangenberger <azulephoenix@gmail.com>
pkgname=private-internet-access-vpn-dev
pkgver=3.0
pkgrel=2
pkgdesc="Installs VPN profiles for Private Internet Access Service"
arch=('any')
url="https://www.privateinternetaccess.com/"
license=('GPL')
depends=('python' 'python-setuptools' 'python-docopt')
makedepends=('git')
optdepends=('networkmanager: Enables PIA for Network Manager'
            'connman: Enables PIA for Connman'
            'openvpn: Allows running configurations from command-line')
sha256sums=('d318fb24aeefda24ad9057dd2955028972928172ed0b4683a10b20f0990e8180'
            'ea06430722d559ef35fbe84f7fd09de80abaae2c0a2f1cf63380d109d087809b'
            '4322a2a4bc3e206c6ab7e1df87a8805032b76c177c1ed9dd3501260ed32ccb30'
            '797dbdb6e3aadc86f97262e26d61cf4847caf85dda4b7a97cac59088cb912b27'
            '246fc4dc3218f56b4c70014df6801b10fc2a573d6545962b7fce05f16908c54e'
            '7f4a5ee1fb8ea4d0e69ed2a8217c575cf335f21e90082f6e423c769eca4a7a46'
            'dd15ff9d020d6779c51bff560c8571b462cc7ca3f4d2a92b8103056be4b2e0fd'
            'SKIP'
            'SKIP'
            'b346249c40d4eab7cf5a2b682b10f574d5f8ad6cf2b62604f15261a246b5f5a1')

source=("https://www.privateinternetaccess.com/openvpn/openvpn.zip"
	          "https://www.privateinternetaccess.com/openvpn/openvpn-strong.zip"
			  "login-example.conf"
			  "pia-example.conf"
			  "restart.conf"
			  "vpn.sh"
			  "pia.8.gz"
			  "git://github.com/flamusdiu/python-pia.git#branch=dev"
			  "git://github.com/masterkorp/openvpn-update-resolv-conf.git"
			  "update-resolv-conf.patch")
		
noextract=("openvpn.zip"
                  "openvpn-strong.zip"
                  "pia.8.gz")

prepare() {
  cd "${srcdir}"
  
  msg2 "Extracting Certifications..."
  bsdtar -xf openvpn.zip "*.pem" "*.crt"
  bsdtar -xf openvpn-strong.zip "*.pem" "*.crt"
  
  msg2 "Extracting OpenVPN Configurations..."
  mkdir "vpn-configs"
  bsdtar -xf openvpn.zip -C vpn-configs *.ovpn
  
  cd "vpn-configs"
  msg2 "Creating Remote Host List..."
  touch ../vpn-hosts.txt
  
  find *.ovpn -print0 | while read -d $'\0' file
  do
    host=$(egrep -o "([-A-Za-z]+\.privateinternetaccess\.com)" "$file")
    printf "%s,%s\n"  "${file/%.ovpn/}" ${host} >> ../vpn-hosts.txt
  done
  
  msg2 "Done."

  msg2 "Patching update-resolv-conf ..."
  patch -Np1 "${srcdir}/openvpn-update-resolv-conf/update-resolv-conf.sh" "${srcdir}/update-resolv-conf.patch"
}

package() {
  cd "${srcdir}"

  install -D -m 644 restart.conf "${pkgdir}/usr/lib/system/openvpn@.service.d/restart.conf"
  install -D -m 755 vpn.sh "${pkgdir}/usr/lib/system/systemd/system-sleep/vpn.sh"
  install -D -m 644 pia.8.gz "${pkgdir}/usr/share/man/man8/pia.8.gz"

  
  install -dm755 "${pkgdir}"/etc/{openvpn,private-internet-access}
  install -D -m 600 vpn-hosts.txt "${pkgdir}/etc/private-internet-access"
  install -D -m 644 *.crt "${pkgdir}/etc/openvpn"
  install -D -m 644 *.pem "${pkgdir}/etc/openvpn"
  install -D -m 644 {pia-example.conf,login-example.conf} "${pkgdir}/etc/private-internet-access/"

  install -D -m 755 openvpn-update-resolv-conf/update-resolv-conf.sh "${pkgdir}/etc/openvpn/update-resolv-conf.sh"

  cd "python-pia"
  python setup.py install --root="${pkgdir}/" --optimize=1

}
