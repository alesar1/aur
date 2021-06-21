# Maintainer: drzee <info@drzee.net>
pkgname=amazon-ssm-agent
pkgver=3.0.1209.0_1
pkgrel=1
pkgdesc="Amazon SSM Agent for managing EC2 Instances using the SSM APIs."
arch=('x86_64')
url="https://aws.amazon.com/documentation/systems-manager/"
license=('APACHE')
groups=()
depends=('glibc')
source=(https://s3.amazonaws.com/ec2-downloads-windows/SSMAgent/latest/debian_amd64/amazon-ssm-agent.deb)
md5sums=('a687a02ff85732a2076a7b8c52f7d98f')
noextract=()

prepare() {
  cd "$srcdir"
  tar -xf data.tar.gz

}


package() {
  cd "$srcdir"

  install -dm755 "$pkgdir"/usr/
  cp -R "${srcdir}"/usr/ "${pkgdir}"

  install -dm755 "$pkgdir"/etc/amazon/
  cp -R "${srcdir}"/etc/amazon/ "${pkgdir}/etc/"

  install -Dm744 \
      "$srcdir"/lib/systemd/system/amazon-ssm-agent.service \
      "$pkgdir"/usr/lib/systemd/system/amazon-ssm-agent.service
}