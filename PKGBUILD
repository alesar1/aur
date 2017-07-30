# Maintainer: Arpan Kapoor <k dot arpan26 at gmail dot com>

pkgname='8188eu-dkms'
_pkgname="${pkgname%-*}"
pkgver='v4.3.0.8_13968'
pkgrel='6'
pkgdesc='Driver for Realtek RTL8188EUS (RTL8188EUS, RTL8188ETV) WLAN'
arch=('any')
url='http://www.realtek.com.tw/'
license=('GPL')
depends=('dkms')
install="${pkgname}.install"
source=("https://www.dropbox.com/s/afs5d2yfgwurqm2/${_pkgname}-${pkgver}.tar.xz"
        'blacklist-r8188eu.conf'
        'date_time_macro.patch'
        'dkms.conf'
        'led.patch'
        'linux-4.0.patch'
        'linux-4.2.patch'
        'linux-4.3.patch'
        'linux-4.6.patch'
        'linux-4.11.patch'
        'no_debug.patch')
sha256sums=('c5604632f88ab6c68074635c73403a3f612f9f69b52af8fe9b96cf851db7a832'
            'edaeafe28410017fabb742d6ccdf060a945150fb56e41084adb7b9dd66739e2b'
            '6f9dcb930203d3e34e75cd52bc3779ace4c601d6fde6cb879288d7cb64ded2c0'
            '1201c9d0d52dc4b140f3b20198410ade2ab3e8ed92f90d53ac72a79425126e9b'
            '5e03c59412f5d7a85e61493681927afc1bac899a7357a99b88e984f1ecb1a512'
            'b4614962e50f86690cdb30ccde013bb480f29b13b157e8feb05a799b5776369d'
            'a8621280e07d95f6aa7ae1db8a285ba512990e0af3f8f43d54bfb4d0231d2551'
            '146a8d3b931861538ee36908e28d8ad774d5de0916e01511f48d84827c59cd99'
            '936e1701b72e5ecb6b79eba722da0586cee9aabc323ddc5a69b2c07d885d1fa1'
            'cd4f16d4a9f2eb6965e3721e6cd7aa70656a50aa2b139e0630342999bac0b2c2'
            '9b8453c15e39cf68ccc1a0d7dfb093439f89e3b2e7c40dd0fa8d0b8aa9956cdd')

prepare() {
  cd "${_pkgname}-${pkgver}"
  patch -p1 -i "${srcdir}/date_time_macro.patch"
  patch -p1 -i "${srcdir}/led.patch"
  patch -p1 -i "${srcdir}/linux-4.0.patch"
  patch -p1 -i "${srcdir}/linux-4.2.patch"
  patch -p1 -i "${srcdir}/linux-4.3.patch"
  patch -p1 -i "${srcdir}/linux-4.6.patch"
  patch -p1 -i "${srcdir}/linux-4.11.patch"
  patch -p1 -i "${srcdir}/no_debug.patch"

  # Disable power saving
  sed -i 's/^CONFIG_POWER_SAVING \= y/CONFIG_POWER_SAVING = n/' Makefile
}

package() {
  cd "${srcdir}"

  local install_dir="${pkgdir}/usr/src/${_pkgname}-${pkgver}"

  # Copy dkms.conf
  install -Dm644 dkms.conf "${install_dir}/dkms.conf"

  # Blacklist r8188eu
  install -Dm644 blacklist-r8188eu.conf "${pkgdir}/etc/modprobe.d/r8188eu.conf"

  # Set name and version
  sed -e "s/@_PKGNAME@/${_pkgname}/" \
      -e "s/@PKGVER@/${pkgver}/" \
      -i "${install_dir}/dkms.conf"

  # Copy sources
  cd "${_pkgname}-${pkgver}"

  for d in $(find . -type d)
  do
    install -dm755 "${install_dir}/$d"
  done

  for f in $(find . -type f)
  do
    install -m644 "$f" "${install_dir}/$f"
  done
}
