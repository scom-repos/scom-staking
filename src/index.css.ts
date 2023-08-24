import { Styles } from '@ijstech/components';
import { maxWidth, maxHeight } from './store/index';
const Theme = Styles.Theme.ThemeVars;

const colorVar = {
  primaryButton: 'transparent linear-gradient(90deg, #AC1D78 0%, #E04862 100%) 0% 0% no-repeat padding-box',
  primaryGradient: 'linear-gradient(255deg,#f15e61,#b52082)',
  primaryDisabled: 'transparent linear-gradient(270deg,#351f52,#552a42) 0% 0% no-repeat padding-box !important'
}

export const stakingDappContainer = Styles.style({
  $nest: {
    'dapp-container-body': {
      $nest: {
        '&::-webkit-scrollbar': {
          width: '6px',
          height: '6px'
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '10px',
          border: '1px solid transparent',
          background: `${Theme.divider} !important`
        },
        '&::-webkit-scrollbar-thumb': {
          background: `${Theme.colors.primary.main} !important`,
          borderRadius: '10px',
          outline: '1px solid transparent'
        }
      }
    }
  }
})

export const stakingComponent = Styles.style({
  $nest: {
    'span': {
      letterSpacing: '0.15px',
    },
    '#stakingElm': {
      background: Theme.background.main,
    },
    '.i-loading-overlay': {
      background: Theme.background.main,
    },
    '.btn-os': {
      background: colorVar.primaryButton,
      height: 'auto !important',
      color: '#fff',
      // color: Theme.colors.primary.contrastText,
      transition: 'background .3s ease',
      fontSize: '1rem',
      fontWeight: 'bold',
      $nest: {
        'i-icon.loading-icon': {
          marginInline: '0.25rem',
          width: '16px !important',
          height: '16px !important',
        },
        'svg': {
          // fill: `${Theme.colors.primary.contrastText} !important`
          fill: `#fff !important`
        }
      },
    },
    '.btn-os:not(.disabled):not(.is-spinning):hover, .btn-os:not(.disabled):not(.is-spinning):focus': {
      background: colorVar.primaryGradient,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      opacity: .9
    },
    '.btn-os:not(.disabled):not(.is-spinning):focus': {
      boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
    },
    '.btn-os.disabled, .btn-os.is-spinning': {
      background: colorVar.primaryDisabled,
      opacity: 1
    },
    '.hidden': {
      display: 'none !important'
    },
    '.staking-layout': {
      width: '100%',
      marginInline: 'auto',
      overflow: 'hidden',
    },
    '.cursor-default': {
      cursor: 'default',
    },
    '.text-overflow': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    '.wrapper': {
      width: '100%',
      height: '100%',
      maxWidth,
      maxHeight,
      $nest: {
        '.sticker': {
          position: 'absolute',
          top: '-8px',
          right: '-33px',
          borderInline: '50px solid transparent',
          borderBottom: '50px solid #20bf55',
          transform: 'rotate(45deg)',
          $nest: {
            '&.sold-out': {
              borderBottomColor: '#ccc',
            },
            '&.closed': {
              borderBottomColor: '#0c1234',
              $nest: {
                'i-label > *': {
                  color: '#f7d064 !important',
                },
                'i-icon': {
                  fill: '#f7d064'
                },
                'svg': {
                  fill: '#f7d064'
                }
              }
            },
            '.sticker-text': {
              position: 'absolute',
              right: '-1.6rem',
              top: '0.75rem',
              width: '50px',
              lineHeight: '1rem',
            },
            'i-label': {
              display: 'flex',
              justifyContent: 'center',
            },
            'i-label > *': {
              color: '#3f3f42 !important',
              fontSize: '0.75rem',
            },
            'i-icon': {
              width: '14px',
              height: '14px',
              display: 'block',
              margin: 'auto',
            },
          },
        },
        '.custom-timer': {
          display: 'flex',
          $nest: {
            '.timer-value': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              paddingInline: 4,
              minWidth: 20,
              height: 20,
              fontSize: 14
            },
            '.timer-unit': {
              display: 'flex',
              alignItems: 'center',
            },
          },
        },
        '.bg-color': {
          display: 'flex',
          flexDirection: 'column',
          color: '#fff',
          minHeight: '485px',
          height: '100%',
          borderRadius: '15px',
          paddingBottom: '1rem',
          position: 'relative',
        },
        '.btn-stake': {
          width: 370,
          maxWidth: '100%',
          padding: '0.625rem 0',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          borderRadius: 12,
        },
        '.no-campaign': {
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          $nest: {
            'i-label > *': {
              fontSize: '1.5rem',
              marginTop: '1rem',
            }
          }
        }
      },
    },
    'i-modal .modal': {
      background: Theme.background.modal,
    },
    '#loadingElm.i-loading--active': {
      marginTop: '2rem',
      position: 'initial',
      $nest: {
        '#stakingElm': {
          display: 'none !important',
        },
        '.i-loading-spinner': {
          marginTop: '2rem',
        },
      },
    }
  }
})
