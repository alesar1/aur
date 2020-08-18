# Maintainer: Remi Gacogne <rgacogne(at)archlinux(dot)org>
_pkgbase=lkrg
pkgname=lkrg-dkms
pkgver=0.8.1
pkgrel=2
pkgdesc='Linux Kernel Runtime Guard (DKMS)'
arch=('x86_64')
url='https://www.openwall.com/lkrg/'
license=('GPL2')
source=("${url}/${_pkgbase}-${pkgver}.tar.gz"
        "${url}/${_pkgbase}-${pkgver}.tar.gz.sign"
        'https://github.com/openwall/lkrg/commit/b459b334e6a1020732541840957ffefb2d1873df.patch'
        'https://github.com/openwall/lkrg/commit/8d926b99fea47fa01e1d563b2ae71fb21cc42867.patch'
        'https://github.com/openwall/lkrg/commit/671b079eb985d6b2b24fb943f39cdf48bfce62d6.patch'
        'dkms.conf')
sha512sums=('38dd9e4d3b5a3011a23b94ca6e63ce61816a98e329eb8e5f127928d42e7ba3fa0acf2679d00327c77a1bc1e351200916a22a54a1a6b17297d0affc466a1e5e74'
            'SKIP'
            '68d330534004184164b27f71b3f42a647bb92b37a6313be41b52da5e2b77a6306f350f238c6fa9df2eec1bbf31e31900ee651646ce2a50e879ea279bc2ce6b2d'
            'a0e47a8ce892e782029151dff91788c9292089d30f8d53924948e1c72da33a6baf38022e49b07dd9bcad375013102d8e17f0bbff85d3e713cac3efa3ea80f323'
            'a28f772466c2fe0116001401f0e5b4fb5b856968e958d56c4e461ac31ebb44dca93f3d09b86a145d7606d87db7d4ee92264bd62dea624653f32e4ac3d8f2fe0a'
            'ee259ac7e15fb6f6947ce6e64be808d6a1107d481ec0a7b4a35266bd720b639909c92e580fae2cecefe5318ce081a4d7431b5f941d1827f7783bee0a3206c5e8')
validpgpkeys=('297AD21CF86C948081520C1805C027FD4BDC136E')
depends=('dkms')

prepare() {
  cd "${_pkgbase}-${pkgver}"
  # Linux 5.8 renamed linux/cryptohash.h
  patch --forward --strip=1 --input="${srcdir}/b459b334e6a1020732541840957ffefb2d1873df.patch"
  patch --forward --strip=1 --input="${srcdir}/8d926b99fea47fa01e1d563b2ae71fb21cc42867.patch"
  # And doesn't export native_write_cr4 anymore
  patch --forward --strip=1 --input="${srcdir}/671b079eb985d6b2b24fb943f39cdf48bfce62d6.patch"
}

package() {
  # Copy dkms.conf
  install -Dm644 dkms.conf "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"

  # Set name and version
  sed -e "s/@_PKGBASE@/${_pkgbase}/" \
      -e "s/@PKGVER@/${pkgver}/" \
      -i "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"

  # Copy sources (including Makefile)
  cp -r "${_pkgbase}-${pkgver}"/* "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/"
  find "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/" -type f -exec chmod 644 {} \;
  find "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/" -type d -exec chmod 755 {} \;
}
