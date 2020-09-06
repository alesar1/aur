#Maintainer: Satiricon <david.satiricon@gmail.com>
pkgname=lanraragi
pkgver=v.0.7.2
pkgrel=2
pkgdesc="LANraragi build package"
arch=('any')
url="https://github.com/Difegue/LANraragi"
license=('MIT')
depends=('perl' 'gnupg' 'cpanminus' 'redis' 'libarchive' 'imagemagick' 'libwebp' 'openssl' 'zlib')
makedepends=('npm' 'make' 'pkgconf')
optdepends=("ghostscript: PDF Support")
source=("https://github.com/Difegue/LANraragi/archive/${pkgver}.tar.gz"
        "lanraragi.service" "lanraragi.sysusers" "lanraragi.tmpfiles")
sha512sums=(
"3fcbda3d3fe8865e8c528a6e73a84749f4856d0a00f48e05ebf6fbe9e3b0f997970425252d2a6c62761691e88cfa4e4e5a62ce2c1eb8e9db8c1fa6a65f99a92c" 
"5ff1d33d87e431e937e55de613ae10168df2bafbe4bffb33947f07a38a46667166dbc5703204749e017e31982a0b39c88a847155b51a88c58953b98e3083eb83"
"c598b37c691b66c3c32aed50d0e79c9d75708c40f79fe83f287e6ed1592736f608b646427ef044bf489d034a91219fd1567b3d0ece320633176ae5dbe28b7685"
"0f66197d8fe253d1f6ff56f4e301c337be66aa82cf091619df1a8c17ec97d66721f2618cdcdf88718f28f0d80263d4331e482d22468e1bd7bd55ecb2bc076a2d"
)


build() {
  cd LANraragi-${pkgver}
  npm run lanraragi-installer install-full
}


package() {
  install -d -m 755 "${pkgdir}/usr/lib/lanraragi/perl5"
  cp -dpr --no-preserve=ownership "${srcdir}/LANraragi-${pkgver}/"* "${pkgdir}/usr/lib/lanraragi"
  chmod -R a=,a+rX,u+w ${pkgdir}/usr/lib/lanraragi

  install -D -m 644 "${srcdir}/lanraragi.service" "${pkgdir}/usr/lib/systemd/system/lanraragi.service"
  install -D -m 644 "${srcdir}/lanraragi.sysusers" "${pkgdir}/usr/lib/sysusers.d/lanraragi.conf"
  install -D -m 644 "${srcdir}/lanraragi.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/lanraragi.conf"
  install -D -m 644 "${srcdir}/LANraragi-${pkgver}/COPYING" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
