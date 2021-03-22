//Fő komponense a milestone-oknak
import React, { useEffect } from 'react';
import MilestoneItem from './MilestoneItem';
import { connect } from 'react-redux';
import { getMilestones } from '../../actions/milestoneAction';
import PropTypes from 'prop-types';