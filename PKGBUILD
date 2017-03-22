# Maintainer: Richard Neumann <mail at richard dash neumann period de>
# Credits: Special thanks to reddit user @pahakala who inspired me to create this package.

pkgname='mkinitcpio-fbsplash'
pkgver='1.0.0'
pkgrel=1
url="https://aur.archlinux.org/packages/${pkgname}/"
pkgdesc='Tools to include a framebuffer based boot splash within the initcpio'
arch=('any')
license=('GPL3')
depends=('bash')
optdepends=('fbv: for image generation script.')
makedepends=('unzip' 'findutils')
source=('fbsplash.hook' 'fbsplash.install' 'mkfbsplash')
sha256sums=('37226adfbfdaefa82721735873a5c86d02911032722008ee1eadc1d6a6d6ab55'
            'd6cc6d4b3ac48b93c79db4b9e61d37c115f51453f6009ba2e3c4d8d8991446d9'
            'a2dec17047857a6af0308c383a8ba9127ebbd25aa2ebef69b96a66152c3925ec')

package() {
    # Install initcpio hook and install script
    install -d -m 755 ${pkgdir}/usr/lib/initcpio/{hooks,install}
    install -m 644 ${srcdir}/fbsplash.hook ${pkgdir}/usr/lib/initcpio/hooks/fbsplash
    install -m 644 ${srcdir}/fbsplash.install ${pkgdir}/usr/lib/initcpio/install/fbsplash

    # Install image generation script
    install -d -m 755 ${pkgdir}/usr/bin
    install -m 755 ${srcdir}/mkfbsplash ${pkgdir}/usr/bin/
}

