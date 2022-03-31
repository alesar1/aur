# Maintainer: Томас <70m4c@70m4c.su>

pkgname=chef-workstation
pkgver=21.7.524
pkgrel=1
pkgdesc="Chef Workstation gives you everything you need to get started with Chef. Start scanning and configuring your environments today with InSpec and chef-run."
arch=('x86_64')
url="https://downloads.chef.io/chef-workstation/"
license=('custom:Chef EULA')
depends=()
conflicts=(chef-dk chef chef-solo cinc)
source=('https://packages.chef.io/files/stable/chef-workstation/21.7.524/ubuntu/18.04/chef-workstation_21.7.524-1_amd64.deb')
sha256sums=('541d5bcddfc2114cc890383f8fc21d95cdf5159c51798a44245123e650b143ca')

package() {
  depends=('libxcrypt-compat')

  cd "$srcdir"
  bsdtar -xf data.tar.xz -C "$pkgdir"

  install -Dm644 "$pkgdir/opt/$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  mkdir -p "$pkgdir/usr/bin"
  binaries="chef-run berks chef chef-apply chef-cli chef-client chef-shell chef-solo chef-vault cookstyle dco delivery inspec kitchen knife ohai push-apply pushy-client pushy-service-manager"
  for binary in $binaries; do
    ln -s "/opt/$pkgname/bin/$binary" "$pkgdir/usr/bin/" || error_exit "Cannot link $binary to /usr/bin"
  done

  chown -Rh 0:0 "$pkgdir"
  chmod -R 755 "$pkgdir/opt"
}
