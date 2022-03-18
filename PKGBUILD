# Maintainer: Andrew Shark <ashark on linuxcomp.ru>
pkgname=amd-vulkan-prefixes
pkgver=1
pkgrel=1
pkgdesc="Select needed vulkan implementation with vk_radv, vk_amdvlk or vk_pro prefix"
arch=('any')
license=('GPL')
url="https://gitlab.com/AndrewShark/amd-vulkan-prefixes"
source=(https://gitlab.com/AndrewShark/amd-vulkan-prefixes/-/raw/main/amd_vulkan_prefixes.sh
        https://gitlab.com/AndrewShark/amd-vulkan-prefixes/-/raw/main/amd_vulkan_prefixes.bash-completion)
sha256sums=("0ae2ff8bac00b0ce0330bafcfc8142576f432706843f6a681d357e410fdafae3"
            "aaf96ea2ae87c7dab678e8a33986199256312dd70004aec87b5fd0f8b65ebaef")


package() {
    install -Dm755 "${srcdir}"/amd_vulkan_prefixes.sh "${pkgdir}"/usr/bin/vk_radv
    install -Dm755 "${srcdir}"/amd_vulkan_prefixes.sh "${pkgdir}"/usr/bin/vk_amdvlk
    install -Dm755 "${srcdir}"/amd_vulkan_prefixes.sh "${pkgdir}"/usr/bin/vk_pro
    
    install -Dm755 "${srcdir}"/amd_vulkan_prefixes.bash-completion "${pkgdir}"/usr/share/bash-completion/completions/vk_radv
    install -Dm755 "${srcdir}"/amd_vulkan_prefixes.bash-completion "${pkgdir}"/usr/share/bash-completion/completions/vk_amdvlk
    install -Dm755 "${srcdir}"/amd_vulkan_prefixes.bash-completion "${pkgdir}"/usr/share/bash-completion/completions/vk_pro
}
